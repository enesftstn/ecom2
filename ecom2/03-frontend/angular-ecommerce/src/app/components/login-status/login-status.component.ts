import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-status',
  templateUrl: './login-status.component.html',
  styleUrls: ['./login-status.component.css']
})
export class LoginStatusComponent implements OnInit, OnDestroy {
  isAuthenticated: boolean = false;
  userFullName: string = '';
  userEmail: string = '';
  
  private authSubscription: Subscription = new Subscription();
  private userSubscription: Subscription = new Subscription();

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Subscribe to authentication state changes
    this.authSubscription = this.authService.isAuthenticated$.subscribe(
      (isAuth) => {
        this.isAuthenticated = isAuth;
        if (isAuth) {
          this.getUserDetails();
        } else {
          this.userFullName = '';
          this.userEmail = '';
        }
      }
    );

    // Subscribe to current user changes
    this.userSubscription = this.authService.currentUser$.subscribe(
      (user) => {
        if (user) {
          this.userFullName = `${user.firstName} ${user.lastName}`;
          this.userEmail = user.email;
        }
      }
    );
  }

  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
    this.userSubscription.unsubscribe();
  }

  getUserDetails(): void {
    this.userFullName = this.authService.getFullName();
    this.userEmail = this.authService.getUserEmail();

    // Store email in session storage for other components that might need it
    if (this.userEmail) {
      sessionStorage.setItem('userEmail', JSON.stringify(this.userEmail));
    }
  }

  logout(): void {
    this.authService.logout().subscribe({
      next: () => {
        sessionStorage.clear();
        this.router.navigate(['/products']);
      },
      error: (err) => {
        console.error('Logout error:', err);
        // Even if logout request fails, clear local session
        sessionStorage.clear();
        this.router.navigate(['/products']);
      }
    });
  }
}