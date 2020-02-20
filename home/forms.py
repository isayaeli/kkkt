from django import forms
from .models import Comment

class commentForm(forms.Form):
	contents = forms.CharField(widget=forms.TextInput(attrs={'class':'form-control'}),label="Comment")

	class Meta:
		modal = Comment
		fields = ['contents']