Vue.createApp(
    {
      data:function(){
        return{
            product: {

                image:{
                    Black: 'black.webp',
                    Red:'red.webp'
                },

                title: 'Stylish dress',
                description:'Check out the new long and short women s dresses in Bershka s New Collection. Floral, striped or checked dresses',
                review: 246,
                color: 'Black',
                price: 50,
                nbStock:5,
                sizes: ['S','M','L','XL'],
                cart:0 ,

            }
        }
      } 
        
    }
).mount('#app')