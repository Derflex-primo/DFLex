



const Sort = () => {
  return (
    <div>
        <form action="">
            <select className="py-3 px-6  border-black border rounded-lg" name="" id="">
                <option value="priceLowToHigh">Price low to high</option>
                <option value="priceHighToLow">Price high to low</option>
                <option value="recentlyListed">Recently Listed</option>
                <option value="mostViewed">Most viewed</option>
                <option value="bestOffer">Best offer</option>
            </select>
        </form>

    </div>
  )
}

export default Sort
