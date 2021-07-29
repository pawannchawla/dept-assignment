import  { filterWork, filterIndustries } from '../../mocks/filters';
import WorkCardItem from './WorkCardItem';
import WorkCards from '../../mocks/work-cards';
const renderOptions = (optMap) => {
    return (optMap.map(item => (
        <option key={item.id} value={item.value}>
            {item.name}
        </option>
    )));
};
const renderWorkCard = (workCards) => {
    return (workCards.map((item, idx) => (
        <WorkCardItem cardData={item} key={idx} />
    )));
};
const Main = () => {
    return (
        <article className="work">
            <section className="work-filters">
                <div className="work-filters__wrapper">
                    <span className="filters-label">Show me</span>
                    <select name="filterWork" className="filter filter-work" data-testid="filter">
                        {renderOptions(filterWork)}
                    </select>
                </div>
                <div className="work-filters__wrapper">
                    <span className="filters-label">in</span>
                    <select name="filterIndustries" className="filter filter-industries" data-testid="filter">
                        {renderOptions(filterIndustries)}
                    </select>
                </div>
            </section>
            <section className="work-cards">
                {renderWorkCard(WorkCards)}
            </section>
        </article>
    );
}

export default Main;