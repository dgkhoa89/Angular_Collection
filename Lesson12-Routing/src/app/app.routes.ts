import { Routes } from "@angular/router"
import { AboutComponent } from "./components/about/about.component"
import { ContactComponent } from "./components/contact/contact.component"
import { HomeComponent } from "./components/home/home.component"
import { NotFoundComponent } from "./components/not-found/not-found.component"
import { ProductsComponent } from "./products/products.component"
import { ProductDetailComponent } from "./components/product-detail/product-detail.component"


export const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'index',
        pathMatch: 'full'
    },
    {
        path: 'about',
        component: AboutComponent
    },

    {
        path: 'product',
        component: ProductsComponent
    },
    {
        path: 'product/:id',
        component: ProductDetailComponent
    },

    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'index',
        component: HomeComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }
]