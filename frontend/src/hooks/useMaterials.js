import { useState, useEffect, useCallback } from "react";
import { api } from "../lib/api";

export function useMaterials() {

    const [materials, setMaterials] = useState([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    const [selectedMaterial, setSelectedMaterial] = useState(null);

    /**
     * Queue upload
     */
    const [uploadQueue, setUploadQueue] = useState([]);

    /**
     * Ambil semua materi
     */
    const refresh = useCallback(async () => {

        setLoading(true);

        try {

            const data = await api.listMaterials();

            setMaterials(data);

            setError("");

        } catch (err) {

            console.error(err);

            setError(err.message);

        } finally {

            setLoading(false);

        }

    }, []);

    /**
     * Load pertama
     */
    useEffect(() => {

        refresh();

    }, [refresh]);

    /**
     * Upload file
     */
    async function upload(file) {

        const uploadId = Date.now();

        const queueItem = {

            id: uploadId,

            name: file.name,

            progress: 0,

            status: "uploading",

        };

        setUploadQueue((prev) => [

            ...prev,

            queueItem,

        ]);

        setError("");

        try {

            await api.uploadMaterial(

                file,

                (progress) => {

                    setUploadQueue((prev) =>

                        prev.map((item) =>

                            item.id === uploadId

                                ? {

                                      ...item,

                                      progress,

                                  }

                                : item

                        )

                    );

                }

            );

            await refresh();

        } catch (err) {

            console.error(err);

            setError(err.message);

        } finally {

            setUploadQueue((prev) =>

                prev.filter(

                    (item) => item.id !== uploadId

                )

            );

        }

    }

    /**
     * Preview
     */
    function preview(material) {

        setSelectedMaterial(material);

    }

    /**
     * Tutup preview
     */
    function closePreview() {

        setSelectedMaterial(null);

    }

    /**
     * Delete
     */
    async function remove(id) {

        try {

            await api.deleteMaterial(id);

            refresh();

        } catch (err) {

            setError(err.message);

        }

    }

    return {

        materials,

        loading,

        error,

        upload,

        refresh,

        remove,

        preview,

        closePreview,

        selectedMaterial,

        uploadQueue,

    };

}