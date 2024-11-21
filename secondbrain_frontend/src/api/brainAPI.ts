const API_BASE_URL = "http://localhost:5001/api/v1";
// const API_BASE_URL = "https://brain.mycarebilling.com/api/v1";


export const createBrain = async (data: any, token: string) => {
  const response = await fetch(`${API_BASE_URL}/brain/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to create brain resource");
  }

  return response.json();
};


export const deleteBrain = async (token: string, id: string) => {
  const response = await fetch(`${API_BASE_URL}/brain/delete/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    }
  })

  if (!response.ok) {
    throw new Error("Failed to create brain resource");
  }

  return response.json();
}


export const getBrain = async (token: string) => {
  const response = await fetch(`${API_BASE_URL}/brain/getall`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    }
  })

  if (!response.ok) {
    throw new Error("Failed to create brain resource");
  }

  return response.json();
}


export const getLinkUrl = async (uid: string, token?: string) => {
  const response = await fetch(`${API_BASE_URL}/link/${uid}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    }
  })
  if (!response.ok) {
    throw new Error("Failed to create brain resource");
  }

  return response.json();
}