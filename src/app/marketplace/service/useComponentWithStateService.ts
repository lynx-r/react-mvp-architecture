import type { ComponentWithStateService } from '@/components/component-with-state'
import { ComponentWithStateServiceImpl } from './ComponentWithStateServiceImpl'

let SERVICE: ComponentWithStateService | null = null

export const useComponentWithStateService = () => {
  if (!SERVICE) {
    SERVICE = new ComponentWithStateServiceImpl({})
  }
  return SERVICE
}
