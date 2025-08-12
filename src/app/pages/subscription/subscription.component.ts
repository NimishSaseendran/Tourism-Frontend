import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
declare var bootstrap: any;

@Component({
  selector: 'app-subscription',
  imports: [
    CommonModule
  ],
  templateUrl: './subscription.component.html',
  styleUrl: './subscription.component.scss'
})
export class SubscriptionComponent {

  selectedPlan: string = '';

  constructor(
    private toastr: ToastrService
  ) { }

  arrSubscription = [
    {
      planName: "Basic",
      price: 0,
      currency: "INR",
      duration: "Free",
      tag: "Starter",
      description: "Get started with basic access and limited features.",
      features: [
        "Create and manage your profile",
        "Get discovered by travelers",
        "Access to community forums",
        "Basic customer support"
      ]
    },
    {
      planName: "Pro",
      price: 9.99,
      currency: "INR",
      duration: "Monthly",
      tag: "Popular",
      description: "Ideal for active guides who want to grow their presence.",
      features: [
        "All Basic features",
        "Priority listing in search results",
        "Detailed analytics dashboard",
        "Direct messaging with travelers",
        "Advanced profile customization"
      ]
    },
    {
      planName: "Premium",
      price: 99.99,
      currency: "INR",
      duration: "Yearly",
      tag: "Best Value",
      description: "Best value plan with full access and exclusive perks.",
      features: [
        "All Pro features",
        "Featured placement on homepage",
        "Exclusive promotional opportunities",
        "Dedicated account manager",
        "Access to premium training materials"
      ]
    }
  ];

  subscribe(planName: string) {
    this.selectedPlan = planName;

    const modal = new bootstrap.Modal(document.getElementById('confirmModal'));
    modal.show();
  }

  confirmSubscribe() {
    const modalEl = document.getElementById('confirmModal');
    const modalInstance = bootstrap.Modal.getInstance(modalEl);
    modalInstance.hide();

    this.toastr.success(`You have successfully subscribed to the ${this.selectedPlan} plan!`);
  }

}
