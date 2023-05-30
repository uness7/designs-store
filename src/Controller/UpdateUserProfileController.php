<?php

namespace App\Controller;

use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Annotation\Route;

class UpdateUserProfileController extends AbstractController
{
    #[Route('/api/dashboard/update-user-profile')]
    public function updateUserProfile(
        EntityManagerInterface $entityManager,
        UserPasswordHasherInterface $userPasswordHasher
    ) : JsonResponse
    {
        $userEmail = $this->getUser()->getUserIdentifier();
        $user = $entityManager
            ->getRepository(User::class)
            ->findOneBy(['email' => $userEmail])
        ;

        $request = Request::createFromGlobals();

        $firstName = $request->request->get('firstName');
        $lastName = $request->request->get('lastName');
        $email = $request->request->get('email');
        $addressOne = $request->request->get('addressLineOne');
        $city = $request->request->get('city');
        $country = $request->request->get('country');
        $phoneNumber = $request->request->get('phone');

        if (!empty($firstName) || !empty($lastName) || !empty($addressOne) || !empty($city) || !empty($country) || !empty($phoneNumber)) {

            $user->setFirstName($firstName);
            $user->setLastName($lastName);
            $user->setAddressLineOne($addressOne);
            $user->setEmail($email);
            $user->setCity($city);
            $user->setCountry($country);
            $user->setPhoneNumber($phoneNumber);
            $user->setCreatedAt(new \DateTimeImmutable());
            $user->setUpdatedAt(new \DateTimeImmutable());
            $user->setRoles('ROLE_USER');

            if (!empty($request->request->get('addressLineTwo'))) {
                $user->setAddressLineTwo($request->request->get('addressLineTwo'));
            }

            $user->setPassword(
                $userPasswordHasher->hashPassword(
                    $user,
                    $request->request->get('password')
                )
            );

            $entityManager->persist($user);
            $entityManager->flush();

            return new JsonResponse(['message' => 'Registration successful'], Response::HTTP_OK);
        }

        return $this->json(['message' => 'User is not authenticated']);
    }
}