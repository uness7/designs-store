<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class DashboardController extends AbstractController
{
    #[Route('/api/dashboard')]
    public function index(): JsonResponse
    {
        return $this->json(
            [                
                'isAuth' => $this->isGranted('ROLE_USER'),
            ]
        );
    }
}