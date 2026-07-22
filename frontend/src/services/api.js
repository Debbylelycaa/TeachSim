import axios from "axios";

import { supabase } from "./supabaseClient";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

async function request(endpoint, options = {}) {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const headers = {
    ...(options.headers || {}),
  };

  if (session?.access_token) {
    headers.Authorization = `Bearer ${session.access_token}`;
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers,
  });

  let data = null;

  try {
    data = await response.json();
  } catch (_) {
  }

  if (!response.ok) {
    throw new Error(
      data?.detail || data?.message || `Request gagal (${response.status})`,
    );
  }

  return data;
}

export const api = {
  /**
   * ============================
   * Materials
   * ============================
   */

  listMaterials() {
    return request("/materials");
  },

  async uploadMaterial(file, onProgress) {
    const {
      data: { session },
    } = await supabase.auth.getSession();
    console.log("SESSION:", session);
    console.log("TOKEN:", session?.access_token);

    const formData = new FormData();

    formData.append("file", file);

    const response = await axios.post(
      `${API_BASE_URL}/materials/upload`,

      formData,

      {
        headers: {
          Authorization: session?.access_token
            ? `Bearer ${session.access_token}`
            : undefined,
        },

        onUploadProgress(event) {
          if (!event.total) return;

          const progress = Math.round((event.loaded * 100) / event.total);

          if (onProgress) {
            onProgress(progress);
          }
        },
      },
    );

    return response.data;
  },

  deleteMaterial(id) {
    return request(`/materials/${id}`, {
      method: "DELETE",
    });
  },

  generateQuestions(id) {
    return request(`/materials/${id}/generate`, {
      method: "POST",
    });
  },

  startSimulation(id) {
    return request(`/simulation/start/${id}`, {
      method: "POST",
    });
  },
};
