// JavaScript functionality for Fitness Events Website

// Function to display upcoming fitness events
function displayUpcomingEvents(events) {
    const eventsContainer = document.getElementById('events');
    eventsContainer.innerHTML = '';

    events.forEach(event => {
        const eventElement = document.createElement('div');
        eventElement.classList.add('event');
        eventElement.innerHTML = `<h3>${event.title}</h3><p>${event.date}</p><p>${event.description}</p>`;
        eventsContainer.appendChild(eventElement);
    });
}

// Sample events data
const sampleEvents = [
    { title: 'Yoga Retreat', date: '2026-04-01', description: 'A relaxing yoga retreat in the mountains.' },
    { title: 'Marathon', date: '2026-05-15', description: 'Join us for an exciting marathon event!' },
];

// Display sample events
document.addEventListener('DOMContentLoaded', () => {
    displayUpcomingEvents(sampleEvents);
});
