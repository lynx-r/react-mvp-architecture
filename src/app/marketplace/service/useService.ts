import type { Service } from './Service'
import { ServiceImpl } from './ServiceImpl'

let SERVICE: Service | null = null

export const useService = (_apiConfig: any) => {
  if (!SERVICE) {
    SERVICE = new ServiceImpl(_apiConfig)
  }
  return SERVICE
}
