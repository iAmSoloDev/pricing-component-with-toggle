import React from 'react'

function Main() {
  return (
    <section className='container'>
        <div className='cards-container'>
            <article className='card-basic'>
                <h2 className='card-title'>Basic</h2>
                <h3 className='card-price'><span>$</span>19.99</h3>
                <h3 className='card-price'><span>$</span>199.99</h3>
                <div className='card-description'>
                    <p className='card-text border-t'>500 GB Storage</p>
                    <p className='card-text border-t'>2 users Allowed</p>
                    <p className='card-text border-t-b'>Send up to 3 GB</p>
                </div>
                <button className='btn btn-dark'>Learn More</button>
            </article>

            <article className='card-Pro linear-gradient'>
                <h2 className='card-title pro-title'>Professional</h2>
                <h3 className='card-price pro-price'><span>$</span>24.99</h3>
                <h3 className='card-price pro-price'><span>$</span>249.99</h3>
                <div className='card-description pro-dec'>
                    <p className='card-text border-t'>1 TB Storage</p>
                    <p className='card-text border-t'>5 users Allowed</p>
                    <p className='card-text border-t-b'>Send up to 10 GB</p>
                </div>
                <button className='btn btn-pro'>Learn More</button>
            </article>

            <article className='card-master'>
                <h2 className='card-title'>Master</h2>
                <h3 className='card-price'><span>$</span>39.99</h3>
                <h3 className='card-price'><span>$</span>399.99</h3>
                <div className='card-description'>
                    <p className='card-text border-t'>2 TB Storage</p>
                    <p className='card-text border-t'>10 users Allowed</p>
                    <p className='card-text border-t-b'>Send up to 20 GB</p>
                </div> 
                <button className='btn btn-dark'>Learn More</button>
            </article>
        </div>
    </section>
  )
}

export default Main