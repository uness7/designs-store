<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class UploadDesignController extends AbstractController
{
    #[Route('/user/dashboard/upload-design',
        name: 'app_upload_design'
    )]
    public function uploadDesign() : Response
    {
        return $this->render('DesignUploadPage/designUploadForm.twig');
    }
}