"use client";
import { GET_SIMPLE_CHARACTERS } from "@/features/characters/queries";
import { GetSimpleChracterQuery, GetSimpleChracterQueryVariables } from "@/gql/graphql";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";




export default function Home() {
  
  const {data, loading} = useQuery<GetSimpleChracterQuery, GetSimpleChracterQueryVariables>(GET_SIMPLE_CHARACTERS)
 
   
  if(loading) return (<p>Loading...</p>)

 return (
  <div>
    {data?.characters?.results?.map((c) => (
      <li key={c?.id}>{c?.name}</li>
    ))}
  </div>
);
}
