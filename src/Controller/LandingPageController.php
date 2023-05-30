<?php

namespace App\Controller;

use PHPUnit\Util\Json;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class LandingPageController extends AbstractController
{
    #[Route('/{reactRoute}', name: 'default', defaults: ['reactRoute'=> null], methods: ['GET'])]
    public function index() : Response
    {
        return $this->render('index.html');
    }
}