import React, { useEffect } from 'react'
import { Categories, mockData } from '../assets/Data'
import InfoSection from '../components/InfoSection'
import CategorySection from '../components/CategorySection'
import { setProducts } from '../redux/productSlice'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard'
import Shop from '../pages/Shop'

import SubscriptionSection from '../components/Subscription'

const Home = () => {
  const dispatch = useDispatch()
  const products = useSelector(state => state.product)
  useEffect(() => {
    dispatch(setProducts(mockData))
  }, [])
  
  const newArrivalsProducts = [
    {
      id: 1,
      name: "Black and white sport cap",
      image: "https://s3-alpha-sig.figma.com/img/36c0/bff0/fd4c077ef8dabfc66a450c841b839cd5?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=MTTW-mHq0geSK38ZUdytcxcn-R~Ev3JyY8snCYZOgOakxfvQ4yHDalWVYLXNLlxuaeSVFXCti4zOy~-NsxlLFGIqGwOlt2Xw4MA~24w88gOAUvNeJciXTExiB0KJnnCUbaVAH1BktXUzIdx57e0vjLbCPoZdk0Wz-1OtCT54YCYKXY2~8uYTOtRjCNYqWFhlanDYw5Ptj99ak0JiUhJjkheiVcbq8k2u2p5ep3NLn8BX~de4irhapENtiZMT1FquoykjajwxphEN7ZwXqUpTRCdhQEXvFwVErT15gtYjY32U8GuHI7V33VS~od5cgWt3d0H-q-qsmBWpLB~UQHVNgw__",
      price: 18.15,
     
    },
    {
      id: 2,
      name: "Metal bridge sunglasses",
      image: "https://s3-alpha-sig.figma.com/img/4a12/d839/cf437f8625e0043612877b3ad2510d14?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=c-zeKzazy1A~35~LYYlYbDDmwWsbrf8y7VdjWBLe8EF3ZYC52IPAgvUQqOIxmpP-m9bHp-JmbZPfF3AVPY5GPa1vXLCaMm0FP1Iu1ZfZkMWa3uNKo5OINcjlPitJ73DihMzo3BV1brjGJJYYANSzfzZIaEMQjuQ6kAiaOK2DfonW~AUx6M58d7MlNatekBNTXMbMriwoIKEV~KT~hoWUKn7rEyZ2IDQz7BPX2TTPAjvmHiJp-kY0LmbHnfeeFfDk0jM0ZLOzSuFg5b2LzW7Sg9f5JPD-dI2uo3a4M0ALHOCLxd0hadygn--Q9nLzgEsytmyU3PBBorJ7b~-zrte~bg__",
      price: 89.95,
      
    },
    {
      id: 3,
      name: "Green baby romper",
      image: "https://s3-alpha-sig.figma.com/img/21e6/5927/098d893ed3bd7d1a91dddab3fe109f63?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=m1T98qxcVGcxUTa7rb-huz63JKRV3w0GzM9epPJBrr67xaBsFCo8PWjTQ2SKg~pAYDz0YxTAfPwPwzZlas2tcDdR~cbO4CMNSftiCpjSGothyahTRNCnB3lItfJdff08ZQDzh6oXJoicVnaEvgGF3fA1Xx7Z7svNfJ8iXAIZL3jeZo85rSRFuH6oStYc2m-Kzbu4KZ7nAb2wxrfxg7zTk1mOhF4WjMPy3QZEps0jTQK4MjIVONs5KE5Rhre3ELAR4G2Ex7XyX4WN0gummJ-27P1GysSKnBmOksBOJ-9vOwkGiku~hAuY1aJXgOzRBp02R7Q27AanNDDBir0bxhf3EQ__",
      price: 20.40,
      
    },
    {
      id: 4,
      name: "Mid-rise slim cropped fit jeans",
      image: "https://s3-alpha-sig.figma.com/img/6254/af9e/98e1225dfd2bab5f7aa280ff85c7bf3d?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=dGMjPllbz7AcwOPbn8QvftZi2MOYdcmNH0~2oX5gg~G2Q9wEKXiFUYcsctLkLPRDDqQRazXjeyGepoxS9koNQc-3Gt1DFw3O9rqcTKrw5EMTUrllgQ8GwOyz-d-rkc~-nJGr5QHDq7~W~GB7EDjMx9r7A2NHzmV0t7H8xWHRlUS3tUTZUEB2J69NPJLH2VmQpllxOqo~8yWnNgvv6VlaCiCwM7M5NUZc8kNOEHtacNEk3A0~liCd6sta3Pexpc71ztftOBpYuw3zY5aTIrJUesKJdx93AgMTVuS0zrfndnMcTTknhF51-BQa8qg9UQS0NKAr6RACIA-kf9ylwiqMag__",
      price: 40.00,
    
    },
    {
      id: 5,
      name: "Red dangle earrings",
      image: "https://s3-alpha-sig.figma.com/img/8a6f/5391/a9bb50c3dac7a10b2590bcb5d9530170?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=sEerNwRC3wmjXUZgw3IqKwHAzVJt3fBerevsYyBlm8VHS6KhwJ2ckSNa5yED9ptJD2zD0Ic5ziT9kktK4J-Dy-QA4Hnwr3DKyyfxhV4UGEuxVEdJsXfWkV29Tj~nH2YZ5HwhH74pAXV3lNVxmnFgWma0NCVLmguR2p2bqkyRID8oMJZSliSOUd2Rpmg0487K2r~ScGNnnrF9t-PJtU1CVxvUtJor~TnE7-e~90TlshnUE9VXEtSVftXIeIlsRvMYCePwHM8bB20h3UwoHb667JR3b2BAg-HN7PBi6WNQeLEsq3kKPUsgj6~7Iz9peJYSgouMJM8HqhKkECs~auIkvw__",
      price: 29.95,
     
    },
    {
      id: 6,
      name: "Baby shoes with laces",
      image: "https://s3-alpha-sig.figma.com/img/021b/966f/d1ab97af3ea773c63f1005193c4241c2?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Kiz28vRZBbAEVbhyX4QS3HPSf9foGjsgVcK16b9b86ZkPbXjSZYKDrzTDNowK3H-6~IoUoiK2zE12SSAHMcqU02K9RTW1KdubXo5HjgGQsuow-fyK38LM0P9HPbVD73nLR7PXYWQ5WzF9cA7nmS6cy6hs-5Veajtc9~rkUfVNYNMjc1xslrcnuD12GD23QzMne-5Ctq2NgJl5EH19QH2NYH3gaImw0I6Pyg-dujmRquQSWAf7UPM9Y8u9SRImqxldJIRJdKSo1oS9-7Kd5xnNUFJkUWumext0IjkfHyd0PsTLLDbuKKAKGVPeq7b8DWFepHCv36M848jlrHjzdV02w__",
      price: 30.60,
     
    }
  ];
  return (
    <div>
      <InfoSection />
      <CategorySection />
      
      
      <div className="container mx-auto my-12">
        <div className="w-full border border-blue-200 p-6 rounded">
          <div className="flex flex-col items-center mb-6">
            <h2 className="text-2xl font-bold text-center mb-2">New arrivals</h2>
            <p className="text-gray-600 text-center mb-1">Check out our latest arrivals for the upcoming season</p>
            <a href="#" className="text-teal-700 hover:underline">See the collection here</a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {newArrivalsProducts.map((product) => (
              <div key={product.id} className="bg-white p-2">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full object-cover mb-2 transform transition-transform duration-300 hover:scale-105 cursor-pointer"
                  />
                  
                  
                </div>
                
               
                <div className="mt-2">
                  <h3 className="text-sm font-medium text-gray-700">{product.name}</h3>
                  <p className="text-sm font-bold mt-1">${product.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
          
         
          
        </div>
      </div>

     
      <div className='container mx-auto py-12'>
        <h2 className='text-2xl font-bold mb-6 text-center'>Top Products</h2>
        <div className='grid grid-cols-1 sm:grid-cole-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer'>
         {products.products.slice(0, 5).map(((product) => (
          <ProductCard key={product.id} product={product} />
         )))}
        </div>
      </div>
      
      <Shop />
      <SubscriptionSection />
    </div>
  )
}

export default Home