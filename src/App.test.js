import { render, screen } from '@testing-library/react';
import App from './App';

test('renders work banner', () => {
    const app = render(<App />);
    const linkElement = app.getByText("WORK");
    expect(linkElement).toBeInTheDocument();
});

test('renders menu button', () => {
    const app = render(<App />);
    const linkElement = app.getByText("MENU");
    expect(linkElement).toBeInTheDocument();
});

test('renders DEPT Logo', () => {
    const app = render(<App />);
    const linkElement = document.querySelector(".header__container--icon-dept");
    expect(linkElement.alt).toContain("Dept Icon");
});
test('is menu hidden on load', () => {
    const app = render(<App />);
    const linkElement = document.querySelector(".menu");
    !expect(linkElement).toBeNull();
});
test('renders filter options', () => {
    const app = render(<App />);
    const linkElements = app.getAllByTestId("filter");
    linkElements.forEach((link) => expect(link).toBeInTheDocument());
});

test('renders all work cards', () => {
    const app = render(<App />);
    const linkElements = document.querySelectorAll(".work-card");
    expect(linkElements.length).toEqual(17);
});


test('renders feedback section', () => {
    const app = render(<App />);
    const linkElement = document.querySelector(".feedback");
    expect(linkElement).toBeInTheDocument();
});


test('renders clients article', () => {
    const app = render(<App />);
    const linkElement = document.querySelector(".clients");
    expect(linkElement).toBeInTheDocument();
});

test('renders contactus section', () => {
    const app = render(<App />);
    const linkElement = document.querySelector(".contactus");
    expect(linkElement).toBeInTheDocument();
});

test('renders footer section', () => {
    const app = render(<App />);
    const linkElement = document.querySelector(".footer");
    expect(linkElement).toBeInTheDocument();
});