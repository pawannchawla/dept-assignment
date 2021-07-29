import ClientsInfo from '../../mocks/clients';
const renderClients = (clients) => {
    return (clients.map((item, idx) => (

        <div className={`logo-container${idx<=5? ` m-site`: ``}`} key={idx}>
            <img className="client-logo" src={item.image} alt={item.name} />
        </div>
    )));
};

const Clients = () => {
    return (
        <article className="clients"> 
            <h2 className="clients__title">CLIENTS</h2>
            <span className="clients__subtitle">
                We value a great working relationship with our clients above all else. It’s why they often come to our parties. It’s also why we’re able to challenge and inspire them to reach for the stars.
            </span>
            <section className="clients--info">
                {renderClients(ClientsInfo)}
            </section>
        </article>
    );
}

export default Clients;