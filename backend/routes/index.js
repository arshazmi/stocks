const express=require('express');
const stock=require('./stock');

const router=express.Router();

const defaultRoutes=[
{
    path:'/stock',
    route:stock
}
];
    




defaultRoutes.forEach((route)=>{
    router.use(route.path,route.route);
});

module.exports=router;