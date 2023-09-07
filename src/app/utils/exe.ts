import {firstValueFrom, Observable} from "rxjs";

export async function exe<T>(observable: Observable<T>): Promise<T> {
  return await firstValueFrom(observable)
}
