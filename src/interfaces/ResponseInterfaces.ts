import { ZodError } from 'zod';

type Status = {
  status: number;
};

type Error = {
  error: ZodError | string;
};

export interface ResponseError extends Status {
  response: Error
}

export interface ResponseCreate<T> extends Status {
  response: T
}

export interface ResponseRead<T> extends Status {
  response: T[]
}

export interface ResponseReadOne<T> extends Status {
  response: T
}

export interface ResponseUpdate<T> extends Status {
  response: T
}

export interface ResponseDelete<T> extends Status {
  response: T
}
