declare module '@ioc:Adonis/Core/Application' {
  import { SchedulerContract } from '@ioc:rafalolszewski94/Scheduler'

  export interface ContainerBindings {
    'rafalolszewski94/Scheduler': SchedulerContract
  }
}
