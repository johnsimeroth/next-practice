export interface Task {
  title: string,
  status: 'incomplete' | 'complete',
}

export interface ClickHandler {
  (e: React.MouseEvent<HTMLElement>) : void;
}
