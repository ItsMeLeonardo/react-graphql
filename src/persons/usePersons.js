import { useQuery } from '@apollo/client'
import { ALL_PERSONS } from './queries'

export default function usePersons() {
  return useQuery(ALL_PERSONS)
}
