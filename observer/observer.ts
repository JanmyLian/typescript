/**
 * 观察者设计模式
 */
// 设置观察者属性
interface Observer{
    notify: Function;
}
// 设置观察者实现类
class ConcreateObserver implements Observer{
    constructor(private name: string){}
    notify(){
        console.log(`${this.name} has been notified`);
    }
}
// 设置运用观察者（观察者功能）
class Subject{
    private observers: Observer[] = [];
    public add(observer: Observer): void{
        console.log(`${observer} is pushed`);
        this.observers.push(observer);
    }
    public delete(observer: Observer): void{
        console.log(`${observer} is deleted`);
        const ind: number = this.observers.indexOf(observer);
        ind != -1 && this.observers.splice(ind, 1);
    }
    public notify(): void{
        console.log(`notify all the observers`, this.observers);
        this.observers.forEach(observer => observer.notify());
    }
}

const subject: Subject = new Subject();
const wendy = new ConcreateObserver("wendy");
const janmy = new ConcreateObserver("janmy");
subject.add(wendy);
subject.add(janmy);
subject.notify();
subject.delete(janmy);
subject.notify();
