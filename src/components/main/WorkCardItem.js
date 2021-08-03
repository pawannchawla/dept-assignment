import React from 'react';
const WorkCardItem = ({cardData}) => {
    const getMultiCards = (multiInfo) => {
        const multiCards = multiInfo.map((item, idx) => (
            <div className="mul-work-card" key={idx}>
                <span className="work-card--card-name">{item.name}</span>
                <span className="work-card--card-mul-summary">{item.summary}</span>
                <button className="btn btn--link-view-case">VIEW CASE</button> 
            </div>
        ));
        return multiCards;
    };
    const {multiInfo = [], showCase = false, feedback = false} = cardData;
    let classNames = showCase ? 'work-card showcase' : 'work-card';
    classNames = feedback ? classNames+=' feedback': classNames;
    return (
        multiInfo.length === 0 ? <section className={classNames}>
            {cardData.image !== "NA" && 
                <img className="work-card--card-image" src={cardData.image} alt={cardData.name} />
            } 
                {!feedback ?
                    <React.Fragment>
                        <span className="work-card--card-name">{cardData.name}</span>
                        <span className="work-card--card-summary">{cardData.summary}</span>
                        <span className="work-card--card-by">{cardData.by}</span>
                        <button className="btn btn--link-view-case">VIEW CASE</button>
                    </React.Fragment>
                : 
                    <React.Fragment>
                        <span className="work-card--card-summary">{cardData.summary}</span>
                        <span className="work-card--card-by">{cardData.by}</span>
                    </React.Fragment>
                }
                
        </section>
        : <section className="work-card multi-cards">
            {getMultiCards(multiInfo)}
        </section>
    );
};
export default WorkCardItem;
