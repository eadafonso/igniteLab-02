import { gql, useQuery } from "@apollo/client";
import { useEffect } from "react";
import { client } from "./config/apollo";

const GET_LESSON = gql`
  query {
    lessons {
      id
      title

      teacher {
        name
        bio
      }
    }
  }
`;

function App() {
  const { data } = useQuery(GET_LESSON);

  console.log(data);
  return <h1 className="text-5xl font-bold text-red-600">Home</h1>;
}

export default App;
