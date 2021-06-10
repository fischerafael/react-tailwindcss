import React from 'react'
import ClockIcon from '../../../Icons/Clock'

export const RecipeCard = () => {
    const cardContainer =
        'bg-white rounded-xl overflow-hidden shadow-sm relative'

    return (
        <div className={cardContainer}>
            <img
                src="https://s2.glbimg.com/PiQjmv_CNRurQMf8stNnxem3tyw=/0x0:600x387/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2020/P/D/hgO8L8SAKl5Ty9IQs9nA/bolinho-de-arroz-crocante.jpg"
                alt="airfryer"
                className="w-full h-40 object-cover"
            />
            <div className="flex flex-col p-5">
                <span className="font-bold text-lg">Bolinho de arroz</span>
                <span className="text-gray-300 text-xs">
                    Receita por @fischerafael
                </span>
            </div>
            <div className="bg-gray-100 rounded-full pl-1 pr-3 py-1 absolute top-0 m-2 flex gap-2 justify-center items-center">
                <ClockIcon />
                <span className="text-gray-500 text-xs uppercase">25 min</span>
            </div>
        </div>
    )
}
