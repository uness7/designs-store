<?php

namespace App\Controller;

use PHPUnit\Util\Json;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class LandingPageController extends AbstractController
{
//    #[Route('/{reactRoute}', name: 'default', defaults: ['reactRoute'=> null], methods: ['GET', 'POST'])]
    #[Route('/{reactRoute}', name: 'default', defaults: ['reactRoute'=> null], methods: ['GET'])]
    public function index() : Response
    {
        return $this->render('index.html');
    }

    #[Route('/api/data', name: 'api_data', methods: ['GET'])]
    public function apiData(): JsonResponse
    {
        $data = [
            'name' => 'John Doe',
            'age' => 30,
            'email' => 'johndoe@example.com'
        ];

        return $this->json($data);
    }
}