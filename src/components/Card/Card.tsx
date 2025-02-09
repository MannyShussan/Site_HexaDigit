import { ReactElement } from "react";

import './Card.scss';

export function Card(title: string): ReactElement {
    return (
        <section className="card">
            <h3 className="card__title">{title}</h3>
        </section>
    );
}