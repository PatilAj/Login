
figma.showUI(__html__);


figma.ui.onmessage = async msg => {
  
  if (msg.type === 'login') {
    const username = msg.username;
    const password = msg.password;

    try {
      const resp = await fetch (
        'https://ojeagtsyqrppqmmxxhgk.supabase.co',
        {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify ({username, password}),
        }
      );
      const data = await resp.json ();

      if (resp.ok) {
        msg.textContent = 'Login successful!';
        
      } else {
        msg.textContent = data.message;
      }
    } catch (error) {
      console.error (error);
      msg.textContent = 'An error occurred. Please try again later.';
    }
  }
  
  figma.closePlugin ();
};
