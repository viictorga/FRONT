import { gql } from "@apollo/client";




export const GET_SIMPLE_CHARACTERS = gql` 
    query GetSimpleChracter {
    characters {
        results {
            id
            name
            }
        }
    }
`;