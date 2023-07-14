"use client"


export const Rankin = ({ data }) => {
 

  return (
    <div>
      <div className="flex justify-between mx-12 mt-8 text-sm font-thin text-slate-500">
        <div className="flex space-x-96">
          <div className="flex space-x-4">
            <h3>Rank</h3>
            <h3>Collection</h3>
          </div>
          <div className="flex space-x-20">
            <h3>Floor Price</h3>
            <h3>Volume</h3>
          </div>
        </div>
      </div>
       <userElem products={data}></userElem>
    </div>
  );
};
