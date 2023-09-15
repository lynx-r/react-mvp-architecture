import { AbstractComponentWithStateServiceImpl } from '@/components/component-with-state'
import { delayAsync } from '@/helpers'
import { uniqueId } from 'lodash'

export class ComponentWithStateServiceImpl extends AbstractComponentWithStateServiceImpl {
  constructor(apiConfig: any) {
    super(apiConfig)
  }

  async fetchInfo(): Promise<string> {
    await delayAsync()
    return uniqueId('marketplace-info ')
  }

  get nameSpace(): string {
    return 'marketplace'
  }
}
