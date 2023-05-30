<?php

namespace App\Controller;

use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class UserProfileController extends AbstractController

{
    #[Route('/api/dashboard/user-profile')]
    public function userProfile(EntityManagerInterface $entityManager) : JsonResponse
    {
        if($this->isGranted('ROLE_USER')) {
            $userEmail = $this->getUser()->getUserIdentifier();
            $userInfo = $entityManager->
            getRepository(User::class)->
            findOneBy(
                [
                    'email' => $userEmail
                ]
            );
            return $this->json(['user' => $userInfo]);
        }

        return $this->json(['message' => 'User Is Not Authenticated']);
    }
}