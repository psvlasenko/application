import { Component } from './Component';
import { ApplicationContext } from '.';
export declare class Launcher extends Component {
    protected context: ApplicationContext;
    constructor(context: ApplicationContext);
    setContext(context: ApplicationContext): void;
    start(): void;
}
