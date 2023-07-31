export interface QueryProps<TData extends any> {
  onSuccess?: (data: TData) => void
  onError?: (error: any) => void
  onRefetch?: () => void
  onHasCompletedOnce?: () => void
}

export interface QueryResult<TData extends any, TVars extends any> {
  result?: TData
  isLoading: boolean
  run: (vars?: TVars) => void
  hasCalledOnce: boolean
  isError: boolean
}
