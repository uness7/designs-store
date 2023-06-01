<?php

namespace App\Controller;

use App\Entity\Product;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class ProductsListController extends AbstractController
{
    #[Route('/api/products')]
    public function listProducts(EntityManagerInterface $entityManager) : JsonResponse
    {
        $products = $entityManager
            ->getRepository(Product::class)
            ->findAll();
        return $this->json(['products' => $products]);
    }
}