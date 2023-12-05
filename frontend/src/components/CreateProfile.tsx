import React, { useState, FormEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
//import jwt from "jsonwebtoken";

const CreateProfile: React.FC = () => {
  const navigate = useNavigate();
  const [age, setAge] = useState<number>(0);
  const [weight, setWeight] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [goal_physique_id, setGoalPhysiqueId] = useState<number>(0);
  const [difficulty, setDifficulty] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // interface DecodedToken {
  //   id: number;
  // }

  useEffect(() => {
    //   const token = localStorage.getItem("yourTokenKey");
    //   if (token) {
    //     try {
    //       const decoded: DecodedToken = jwt.decode(token) as DecodedToken;
    //       const userId = decoded.id;
    //       console.log(userId);
    //     } catch (error) {
    //       console.error("Error decoding JWT:", error);
    //     }
    //   }
  }, []);

  const handleSelectPhysique = (selectedPhysiqueId: number) => {
    setGoalPhysiqueId(selectedPhysiqueId);
  };

  const handleSelectDifficulty = (selectedDifficulty: number) => {
    setDifficulty(selectedDifficulty);
  };

  const physiqueOptions = [
    { id: 1, label: "Slim" },
    { id: 2, label: "Athletic" },
    { id: 3, label: "Muscular" },
    { id: 4, label: "Curvy" },
    { id: 5, label: "Lean" },
    { id: 6, label: "Bulky" },
  ];

  const difficultyOptions = [
    { id: 1, label: "Easy" },
    { id: 2, label: "Medium" },
    { id: 3, label: "Hard" },
  ];

  const handleCreateProfile = async (e: FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`http://127.0.0.1:8080/api/profile/new/60`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          age,
          weight,
          height,
          goal_physique_id,
          difficulty,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.message || "An error occurred during profile creation"
        );
      }

      const result = await response.json();
      console.log("Profile created successfully:", result);

      navigate("/dashboard");
    } catch (error: any) {
      console.error("Error creating profile:", error);
      setError(error.message || "An error occurred during profile creation");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-50">
      <header className="m-8">
        <h1 className="text-5xl text-red-400 font-extrabold">PeakPulse</h1>
      </header>
      <div className="bg-white p-8 rounded shadow-md w-2/5">
        <h1 className="text-3xl font-semibold mb-6 text-center">
          Create Your Workout and Diet Plans
        </h1>
        <form onSubmit={handleCreateProfile}>
          <div className="mb-4">
            <label
              htmlFor="age"
              className="block text-sm font-medium text-gray-600"
            >
              Age: (Years)
            </label>
            <input
              type="number"
              id="age"
              value={age}
              onChange={(e) => setAge(Number(e.target.value))}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="weight"
              className="block text-sm font-medium text-gray-600"
            >
              Weight: (KG)
            </label>
            <input
              type="number"
              id="weight"
              value={weight}
              onChange={(e) => setWeight(Number(e.target.value))}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="height"
              className="block text-sm font-medium text-gray-600"
            >
              Height: (cm)
            </label>
            <input
              type="number"
              id="height"
              value={height}
              onChange={(e) => setHeight(Number(e.target.value))}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="physiqueButtons"
              className="block text-sm font-medium text-gray-600"
            >
              Goal Physique:
            </label>
            <div className="flex space-x-2 mt-1">
              {physiqueOptions.map(({ id, label }) => (
                <button
                  key={id}
                  type="button"
                  className={`flex-1 p-2 rounded-md text-center ${
                    goal_physique_id === id
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-blue-200"
                  }`}
                  onClick={() => handleSelectPhysique(id)}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="difficultyButtons"
              className="block text-sm font-medium text-gray-600"
            >
              Difficulty:
            </label>
            <div className="flex space-x-2 mt-1">
              {difficultyOptions.map(({ id, label }) => (
                <button
                  key={id}
                  type="button"
                  className={`flex-1 p-2 rounded-md text-center ${
                    difficulty === id
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-blue-200"
                  }`}
                  onClick={() => handleSelectDifficulty(id)}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className={`w-full bg-blue-500 text-white p-2 rounded-md ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Creating Profile..." : "Create Profile"}
          </button>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default CreateProfile;
