import { BASE_API } from "../utils/constants";

export const edit_postStudy = async (study) => {
    return await fetch(`${BASE_API}/post-studies/${study.id}`, {
      method: "PATCH",
      headers: {
            "Content-Type": "application/json",
      },
      body: JSON.stringify(study),
    })
      .then(response => response.json())
      .then((data) => {
      return data;
      });
}
