export interface ResErr {
  status: number;
  message: string;
}

export function handleErr(err): ResErr {
  if (err.response) {
    return {
      status: err.response.status,
      message: err.response.data.message || err.response.status_text,
    }
  }
  return {
    status: -1,
    message: '',
  }
}