import { AggregateRoot } from "../../../shared/domain/aggregate-root";
import { UserId } from "../value-objects/user-id.value-object";
import { UserName } from "../value-objects/user-name.value-object";

export interface UserProps {
    id: UserId;
    name: UserName;
}

export class UserEntity extends AggregateRoot<UserProps> {
    constructor(props: UserProps) {
        super(props);
        // add UserCreated domain event that will be published so an event
        // handler may receive it.
    }

    get name(): UserName {
        return this.props.name;
    }

    static validate(props: UserProps): void {
        // Entity business rules validation to protect it's invariant.
    }
}
