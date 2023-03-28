import './ScrollStats.scss';

function ScrollStats({ 
    passRateCount, 
    totalScrollCount, 
    resetCount 
}) {

    return(
        <section className="stats__main">
            <div className="stats__text">Chaos Success:{passRateCount}/{totalScrollCount}</div>
            <div className="stats__text">Resets:{resetCount}</div>
        </section>
    )
}

export default ScrollStats;