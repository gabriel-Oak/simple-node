import { Container } from "inversify";

let container: Container;

export default function createContainer() {
  if (!container) 
    container = new Container({ autoBindInjectable: true });
  return container;
}