import { Application } from './Application';
import { ApplicationContext } from './ApplicationContext';
import { Launcher } from './Launcher';
import { Class } from './types';
import { Component } from './Component';
import { camelCase } from 'lodash';

export class ApplicationBuilder {

    protected context: ApplicationContext;

    constructor(launcher: Class<Launcher> | Launcher) {
        this.context = this.createContext(launcher);
    }

    public buildComponent(component: Class<Component>, name: string = camelCase(component.name)): ApplicationBuilder {
        this.context.add(component, name);

        return this;
    }

    public addComponent(component: Component, name: string = camelCase(component.constructor.name)): ApplicationBuilder {
        this.context.add(component, name);

        return this;
    }

    public create(): Application {
        return new Application(this.context);
    }

    protected createContext(launcher: Class<Launcher> | Launcher): ApplicationContext {
        return new ApplicationContext(launcher)
    }

}
