const API_URL = "http://127.0.0.1:8000";

export async function transcribeAudio(blob) {

    const formData = new FormData();

    formData.append(
        "audio",
        blob,
        "presentation.webm"
    );

    const response = await fetch(
        `${API_URL}/simulation/transcribe`,
        {
            method: "POST",
            body: formData,
        }
    );

    if (!response.ok) {

        throw new Error("Failed to transcribe");

    }

    return await response.json();

}

export async function generateQuestion(

    materialId,

    transcript,

) {

    const response = await fetch(

        "http://127.0.0.1:8000/simulation/question",

        {

            method: "POST",

            headers: {

                "Content-Type": "application/json",

            },

            body: JSON.stringify({

                material_id: materialId,

                transcript,

            }),

        }

    );

    if (!response.ok) {

        throw new Error("Generate question failed");

    }

    return await response.json();

}