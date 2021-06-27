import { DomainEvent } from "./domain.event.base";

export abstract class AggregateRoot<EntityProps> { //extends Entity<EntityProps>{
    protected readonly props: EntityProps;

    constructor(props: EntityProps) {
        this.props = props;
    }

    private domainEvents: DomainEvent[] = [];
}
