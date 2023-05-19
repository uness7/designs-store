<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class OrderController extends AbstractController
{
    #[Route('/user/dashboard/upload-design/order/{designId}',
        name: 'app_create_order'
    )]
    public function createOrder() : Response
    {
        return $this->render('OrderPage/order.html.twig');
    }
}