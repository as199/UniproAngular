<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\CoursRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass=CoursRepository::class)
 */
class Cours
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $nomCours;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $details;

    public function getId()
    {
        return $this->id;
    }

    public function getNomCours()
    {
        return $this->nomCours;
    }

    public function setNomCours( $nomCours)
    {
        $this->nomCours = $nomCours;

        return $this;
    }

    public function getDetails()
    {
        return $this->details;
    }

    public function setDetails( $details)
    {
        $this->details = $details;

        return $this;
    }
}
