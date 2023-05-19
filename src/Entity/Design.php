<?php

namespace App\Entity;

use App\Repository\DesignRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: DesignRepository::class)]
class Design
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $design_title = null;

    #[ORM\Column(length: 255)]
    private ?string $design_file_path = null;

    #[ORM\Column(length: 255)]
    private ?string $design_status = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $createdAt = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $updatedAT = null;

    #[ORM\OneToMany(mappedBy: 'design_id', targetEntity: Order::class, orphanRemoval: true)]
    private Collection $orders;

    #[ORM\ManyToOne(inversedBy: 'designs')]
    #[ORM\JoinColumn(nullable: false)]
    private ?User $user_id = null;

    public function __construct()
    {
        $this->orders = new ArrayCollection();
    }


    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDesignTitle(): ?string
    {
        return $this->design_title;
    }

    public function setDesignTitle(string $design_title): self
    {
        $this->design_title = $design_title;

        return $this;
    }

    public function getDesignFilePath(): ?string
    {
        return $this->design_file_path;
    }

    public function setDesignFilePath(string $design_file_path): self
    {
        $this->design_file_path = $design_file_path;

        return $this;
    }

    public function getDesignStatus(): ?string
    {
        return $this->design_status;
    }

    public function setDesignStatus(string $design_status): self
    {
        $this->design_status = $design_status;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeImmutable
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeImmutable $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getUpdatedAT(): ?string
    {
        return $this->updatedAT;
    }

    public function setUpdatedAT(string $updatedAT): self
    {
        $this->updatedAT = $updatedAT;

        return $this;
    }

    /**
     * @return Collection<int, Order>
     */
    public function getOrders(): Collection
    {
        return $this->orders;
    }

    public function addOrder(Order $order): self
    {
        if (!$this->orders->contains($order)) {
            $this->orders->add($order);
            $order->setDesignId($this);
        }

        return $this;
    }

    public function removeOrder(Order $order): self
    {
        if ($this->orders->removeElement($order)) {
            // set the owning side to null (unless already changed)
            if ($order->getDesignId() === $this) {
                $order->setDesignId(null);
            }
        }

        return $this;
    }

    public function getUserId(): ?User
    {
        return $this->user_id;
    }

    public function setUserId(?User $user_id): self
    {
        $this->user_id = $user_id;

        return $this;
    }
}
